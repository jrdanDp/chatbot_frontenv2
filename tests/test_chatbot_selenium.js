import { Builder, By, until } from 'selenium-webdriver';
import fs from 'fs';
import path from 'path';

const evidenciaPath = path.resolve('./tests/evidencias');
if (!fs.existsSync(evidenciaPath)) fs.mkdirSync(evidenciaPath, { recursive: true });

async function saveScreenshot(driver, nombre) {
  const filePath = path.join(evidenciaPath, `${Date.now()}_${nombre}.png`);
  const img = await driver.takeScreenshot();
  fs.writeFileSync(filePath, img, 'base64');
}

async function enviarMensaje(driver, texto, nombreCaptura) {
  console.log(`💬 Enviando mensaje: "${texto}"`);

  const input = await driver.findElement(By.css('input.input-field'));
  const boton = await driver.findElement(By.css('button[type="submit"]'));

  await input.clear();
  await input.sendKeys(texto);
  await saveScreenshot(driver, `${nombreCaptura}_antes_enviar`);
  await boton.click();

  await driver.wait(
    until.elementLocated(
      By.xpath(`//div[contains(@class,'message user')]//div[contains(text(),"${texto}")]`)
    ),
    10000
  );

  console.log('🤖 Esperando respuesta del bot...');

  const typingSelector = By.css('.message.bot .typing-indicator');
  const messageSelector = By.css('.message.bot .message-content');

  try {
    
    await driver.wait(until.elementLocated(typingSelector), 10000);
    await driver.wait(until.stalenessOf(await driver.findElement(typingSelector)), 60000);
    await driver.wait(until.elementLocated(messageSelector), 10000);

  } catch {
    await driver.wait(until.elementLocated(messageSelector), 10000);
  }


  await driver.sleep(1500);
  await saveScreenshot(driver, `${nombreCaptura}_respuesta_bot`);

  const mensajesBot = await driver.findElements(messageSelector);
  const ultimoMensaje = await mensajesBot[mensajesBot.length - 1].getText();
  console.log(`🤖 Bot respondió: "${ultimoMensaje}"`);
  console.log(`✅ Respuesta procesada para "${texto}"`);
}

async function ejecutarPrueba() {

  console.log('🧠 Iniciando prueba en Microsoft Edge...');
  const driver = await new Builder().forBrowser('MicrosoftEdge').build();

  try {
    await driver.get('http://localhost:5173/');
    await driver.manage().window().maximize();

    await driver.wait(until.elementLocated(By.css('.home-container')), 10000);
    await saveScreenshot(driver, '01_home_cargada');

    const iniciarBtn = await driver.findElement(By.css('button.primary-button'));
    await iniciarBtn.click();

    await driver.wait(until.elementLocated(By.css('.chat-container')), 10000);
    await saveScreenshot(driver, '02_chat_abierto');

    await enviarMensaje(driver, 'Hola', '03_mensaje_hola');
    await enviarMensaje(driver, 'Me llamo José', '04_mensaje_nombre');
    await enviarMensaje(driver, 'Me siento triste', '05_mensaje_emocion');

    console.log('🎉 Prueba finalizada correctamente en Microsoft Edge.');
  } catch (err) {
    console.error('❌ Error durante la prueba:', err);
    await saveScreenshot(driver, 'error_detectado');
  } finally {
    await driver.quit();
  }
}

ejecutarPrueba();
