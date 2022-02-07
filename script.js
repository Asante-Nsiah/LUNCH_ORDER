const submit = document.getElementById('submit');
const ernesto = document.getElementById('menuOne');
const herpes = document.getElementById('menuTwo');
const trainerHistory = document.getElementById('trainerhistory');
const traineeHistory = document.getElementById('traineehistory');
const spicesMeal = document.getElementById('spices');
const selectedMeal = document.getElementById('meal');
const cateringService = document.getElementById('service');
const catering = document.querySelectorAll('.catering');
const mealOne = document.getElementById('mealOne');
const submitTwo = document.getElementById('submitTwo')


spicesMeal.style.display = 'none';
      
  catering.forEach(el => {
      el.addEventListener('change', (e) =>{
        switch(e.target.value){
            case 'hot':
                spicesMeal.style.display = 'none';
                selectedMeal.style.display = 'block';
                cateringService.innerText = 'HOT ERNESTO';
                break;
            case 'herpes':
                spicesMeal.style.display = 'block';
                selectedMeal.style.display = 'none';
                cateringService.innerText = 'HERPES & SPICES';
                break;
        }

      })
  })  
    
    



submit.addEventListener('click', () =>{
    let History = document.createElement('p')
    History.classList.add('trainerHistory')
    trainerHistory.innerText = selectedMeal.value;
})

submit.addEventListener('click', () =>{
    let istory = document.createElement('p')
    istory.classList.add('traineeHistory')
    traineeHistory.innerText = mealOne.value;
})