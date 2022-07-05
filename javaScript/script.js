"use strict";

//buttons
const home_btn = document.getElementById("homeBtn");
const product_and_design_btn = document.getElementById("productAndDesignBtn");
const project_btn = document.getElementById("projectBtn");
const company_btn = document.getElementById("companyBtn");
const resource_and_articles_btn = document.getElementById(
  "resourceAndArticlesBtn"
);
const FAQ_btn = document.getElementById("FAQBtn");
const contuct_us_btn = document.getElementById("contuctUsBtn");
const request_callback_btn = document.getElementById("requestCallbackBtn");

//pages
const home = document.querySelector(".home");
const product_and_design = document.querySelector(".productImagesAndDesign");
const project = document.querySelector(".project");
const company = document.querySelector(".company");
const resource_and_articles = document.querySelector(".resourceAndArticles");
const FAQ = document.querySelector(".FAQ");
const contuct_us = document.querySelector(".contuctUs");
const request_callback = document.querySelector(".requestCallback");
console.log(request_callback);
console.log(request_callback_btn);
//button clicks events
home_btn.addEventListener("click", function () {
  home.classList.add("active");
  home.classList.remove("hidden");
  
  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

product_and_design_btn.addEventListener("click", function () {
  product_and_design.classList.add("active");
  product_and_design.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

project_btn.addEventListener("click", function () {
  project.classList.add("active");
  project.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

company_btn.addEventListener("click", function () {
  company.classList.add("active");
  company.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

resource_and_articles_btn.addEventListener("click", function () {
  resource_and_articles.classList.add("active");
  resource_and_articles.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

FAQ_btn.addEventListener("click", function () {
  FAQ.classList.add("active");
  FAQ.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

contuct_us_btn.addEventListener("click", function () {
  contuct_us.classList.add("active");
  contuct_us.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");

  request_callback.classList.add("hidden");
  request_callback.classList.remove("active");
});

request_callback_btn.addEventListener("click", function () {
  request_callback.classList.add("active");
  request_callback.classList.remove("hidden");

  home.classList.add("hidden");
  home.classList.remove("active");

  project.classList.add("hidden");
  project.classList.remove("active");

  company.classList.add("hidden");
  company.classList.remove("active");

  resource_and_articles.classList.add("hidden");
  resource_and_articles.classList.remove("active");

  FAQ.classList.add("hidden");
  FAQ.classList.remove("active");

  contuct_us.classList.add("hidden");
  contuct_us.classList.remove("active");

  product_and_design.classList.add("hidden");
  product_and_design.classList.remove("active");
});
