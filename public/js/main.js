const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => 
{
    event.preventDefault();
   
    let cityVal = cityName.value;
    if (cityName === '') {
        city_name.innerText = `Plz write name of city`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ec3d1514fb8120e9cd98c89b9fbe5103`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(response)
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood  = arrData[0].weather[0].main;
            if (tempMood== 'Sunny') {
                temp_status.innerHTML =
                ' <i class="fa-solid fa-sun" style="color: #eccc68;"></i>';
            } else if(tempMood== 'Clouds') {
                temp_status.innerHTML =
                ' <i class="fa-solid fa-cloud" style="color: #dfe4ea;"></i>';
            }else if(tempMood== 'Rainy') {
                temp_status.innerHTML =
                ' <i class="fa-solid fa-cloud-rain" style="color: #a4b0be;"></i>';
            }else {
                temp_status.innerHTML =
                ' <i class="fa-solid fa-cloud" style="color: #44c3de;"></i>';
            }
            datahide.classList.remove('data_hide');
        }
         catch (error) {
            city_name.innerText = `Plz write name of city name properly`;
            datahide.classList.add('data_hide');
        }
    
    }
}

submitBtn.addEventListener('click', getInfo);