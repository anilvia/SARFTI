function notification_perm(){var currentPermission;
    Notification.requestPermission( function(result) { currentPermission = result  } );}
    
          const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        const days = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
    const d = new Date();
    let month = months[d.getMonth()];
    let day = days[d.getDate()];
    console.log(month);
    console.log(day);
    document.getElementById("date-m").innerHTML = month;
    document.getElementById("date-n").innerHTML = day;
    document.addEventListener('DOMContentLoaded', function () {
      var modeSwitch = document.querySelector('.mode-switch');
    
      modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
      });
      
      var listView = document.querySelector('.list-view');
      var gridView = document.querySelector('.grid-view');
      var projectsList = document.querySelector('.project-boxes');
      
      listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
      });
      
      gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
      });
      
      document.querySelector('.messages-btn').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.add('show');
      });
      
      document.querySelector('.messages-close').addEventListener('click', function() {
        document.querySelector('.messages-section').classList.remove('show');
      });
    });