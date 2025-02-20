
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const addTaskButton = document.querySelector("button"); // Butonu doğru seçtik
  const taskList = document.getElementById("taskList");
  const themeToggle = document.getElementById("themeToggle");

  // Görev Ekleme Fonksiyonu
  function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (taskText !== "" && taskDueDate !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `${taskText} - ${taskDueDate}`;

      // Silme Butonu
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "🗑️";
      deleteButton.classList.add("delete-btn");

      // Silme işlemi
      deleteButton.onclick = function () {
        newTask.remove();
      };

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      // Inputları temizle
      taskInput.value = "";
      taskDate.value = "";
    }
  }

  // Görev ekleme butonu
  if (addTaskButton) {
    addTaskButton.addEventListener("click", addTask);
  } else {
    console.error("addTask butonu bulunamadı!");
  }

  // Enter tuşuna basınca görev ekle
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Karanlık Mod Aç/Kapat
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Açık Mod" : "🌙 Karanlık Mod";
  });
});
