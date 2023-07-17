for (let res = 1; res < 30;res++){
let parent = document.querySelector('#w3KKa-asr');
let week_buff = document.createElement('div');
week_buff.className = "week_main_obj";
week_buff.id = 'jfa2a_'+res;
week_buff.textContent = 'test_week\nid:'+res;

parent.appendChild(week_buff);


}