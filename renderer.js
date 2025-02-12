function initUI() {

  document.getElementById("server-name").textContent = `${config.serverName} Launcher`

  // Definir o background
  document.body.style.backgroundImage = `url('${config.backgroundImage}')`

  // Preencher as informações do servidor
  document.getElementById("server-version").textContent = config.version
  document.getElementById("server-type").textContent = config.serverType
  document.getElementById("exp-rate").textContent = `x${config.experienceRate}`
  document.getElementById("skill-rate").textContent = `x${config.skillRate}`
  document.getElementById("magic-rate").textContent = `x${config.magicLevelRate}`

  // Adicionar event listeners aos botões
  document.getElementById("start-game").addEventListener("click", startGame)
  document.getElementById("update-game").addEventListener("click", updateGame)
  document.getElementById("visit-website").addEventListener("click", visitWebsite)

  // Verificar o status do servidor
  checkServerStatus()

  // Buscar e exibir os personagens
  fetchHighscores()
}

// Função para iniciar o jogo
function startGame() {
  window.electronAPI.startGame()
}

// Função para atualizar o cliente
function updateGame() {
  alert("Sistema de atualização em construção!")
}

function visitWebsite() {
  if (window.electronAPI) {
    window.electronAPI.openExternal(config.websiteUrl);
  } else {
    console.error('window.electronAPI ou window.electronAPI.shell não está definido!');
  }
}

// Função para verificar o status do servidor
async function checkServerStatus() {
  try {
    const response = await fetch('https://eclipseot.online/?online');
    if (response.ok) {
      const status = await response.text();
      if (status.includes('offline')) {
        document.getElementById("server-status").textContent = "Offline";
        document.getElementById("server-status").style.color = "red";
      } else {
        document.getElementById("server-status").textContent = "Online";
        document.getElementById("server-status").style.color = "green";
      }
    } else {
      document.getElementById("server-status").textContent = "Erro ao verificar status";
      document.getElementById("server-status").style.color = "orange";
    }
  } catch (error) {
    document.getElementById("server-status").textContent = "Erro ao verificar status";
    document.getElementById("server-status").style.color = "orange";
    console.error('Erro ao verificar status do servidor:', error);
  }
}

// Função para buscar e exibir os personagens
async function fetchHighscores() {
  try {
    const response = await fetch('https://eclipseot.online/?highscores');
    if (response.ok) {
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const rows = doc.querySelectorAll('.TableContentContainer .TableContent tbody tr:not(.LabelH)');
      const highscoresList = document.getElementById('highscores-list');
      highscoresList.innerHTML = '';

      for (let i = 0; i < 5; i++) {
        const cells = rows[i].querySelectorAll('td');
        const name = cells[2].textContent.trim();
        const vocation = cells[3].textContent.trim();
        const level = cells[4].textContent.trim();

        const li = document.createElement('li');
        li.textContent = `${name} - ${level} - ${vocation}`;
        highscoresList.appendChild(li);
      }
    } else {
      document.getElementById('highscores-list').innerHTML = '<li>Erro ao carregar highscores</li>';
    }
  } catch (error) {
    document.getElementById('highscores-list').innerHTML = '<li>Erro ao carregar highscores</li>';
    console.error('Erro ao carregar highscores:', error);
  }
}

// Inicializar a interface do usuário quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", initUI);