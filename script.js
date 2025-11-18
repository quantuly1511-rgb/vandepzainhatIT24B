// Lấy dữ liệu từ api :https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/28.jpg


const URL = "https://5ff563a4941eaf0017f36bd4.mockapi.io/api/v1/jewelry"

const customerSayElement = document.getElementById('customer-say')

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, index) => {
      const { customersay, fullname, job, avatar } = element;
      
      // nếu là item đầu tiên thì thêm class active
      let activeClass = index === 0 ? "active" : "";
      
      let htmlContent = `<div class="carousel-item ${activeClass}">
              <div class="row align-items-center">
                <div class="col-md-5 testimonial-img">
                  <img src="${avatar}" class="d-block w-100" alt="customer">
                  <div class="quote-icon">“</div>
                </div>
                <div class="col-md-7">
                  <div class="testimonial-card">
                    <p class="testimonial-name">${fullname}</p>
                    <p class="testimonial-role">${job}</p>
                    <p class="testimonial-text">${customersay}</p>
                  </div>
                </div>
              </div>
            </div>`;
      
      customerSayElement.innerHTML += htmlContent;
    });
  })
  .catch((err) => console.error(err));


