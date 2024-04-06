document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const data = [
    {
      imageulr:
        "https://www.blibli.com/friends-backend/wp-content/uploads/2023/10/c8f0a52eacbaa804637fc9c3da24119c-1.webp",
      imageTitle: "Telor",
      harga: "100.000",
      cashback: "casback 10%",
    },

    {
      imageulr:
        "https://cdn1-production-images-kly.akamaized.net/ac3jELqw9vk6gRcsrK-VokTLpoE=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4214710/original/019361800_1667548137-sea_salt.jpg",
      imageTitle: "Telor",
      harga: "100.000",
      cashback: "casback 10%",
    },
  ];

  function perulangan() {
    for (let i = 0; i <= data.length; i++) {
      const newImage = document.createElement("img");
      newImage.src = data[i].imageulr;
      newImage.classList.add("img");

      const article = document.createElement("article");
      article.classList.add("card");

      const infoProduk = document.createElement("div");
      infoProduk.classList.add("info-produk");

      const judulProduk = document.createElement("p");
      judulProduk.classList.add("judul-produk");
      judulProduk.innerHTML = data[i].imageTitle;

      const hargaProduk = document.createElement("p");
      hargaProduk.classList.add("harga-produk");
      hargaProduk.innerHTML = `Rp.${data[i].harga}`;

      const cashback = document.createElement("p");
      cashback.classList.add("cashback-produk");
      cashback.innerHTML = data[i].cashback;

      infoProduk.appendChild(judulProduk);
      infoProduk.appendChild(hargaProduk);
      infoProduk.appendChild(cashback);

      article.appendChild(newImage);
      article.appendChild(infoProduk);

      mainContainer.appendChild(article);
      console.table(data);

      article.addEventListener("click", function () {
        count = count + 1;
        document.querySelector(".card-count").innerHTML = count;
      });
    }
  }

  const mainContainer = document.querySelector(".main-container");

  const formInput = document.getElementById("form-input");
  formInput.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameOFProduk = document.getElementById("nameOfProduk").value;
    let hargaOfProduk = document.getElementById("hargaOfProduk").value;
    let gambarOfProduk = document.getElementById("imageOfProduk").value;
    let cashbackOfProduk = document.getElementById("cashbackOfProduk").value;

    data.push({
      imageulr: gambarOfProduk,
      imageTitle: nameOFProduk,
      harga: hargaOfProduk,
      cashback: cashbackOfProduk,
    });

    document.getElementById("form-input").reset();
    mainContainer.innerHTML = ""
    perulangan();
  
  });

  
});
