function addTask() {
    const taskInput = document.getElementById('taskInput'); // Görev metni
    const taskDate = document.getElementById('taskDate'); // Seçilen tarih
    const taskText = taskInput.value.trim(); // Görev metni
    const taskDueDate = taskDate.value; // Seçilen tarih
  
    if (taskText !== "" && taskDueDate !== "") {
      const newTask = document.createElement('li');
      newTask.innerHTML = `${taskText} - ${taskDueDate}`; // Görev ve tarih ekleniyor
  
      // Silme butonunu oluştur
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Sil';
      deleteButton.classList.add('delete-btn');
      
      // Silme butonuna tıklandığında görev öğesini sil
      deleteButton.onclick = function() {
        newTask.remove();
      };
  
      // Silme butonunu liste öğesine ekle
      newTask.appendChild(deleteButton);
  
      // Yeni görevi listeye ekle
      document.getElementById('taskList').appendChild(newTask);
  
      // Input alanlarını sıfırlıyoruz
      taskInput.value = "";
      taskDate.value = "";
    }
  }
  