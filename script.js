{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function searchProduct() \{\
  const query = document.getElementById("searchBox").value;\
  if (query.trim() === "") \{\
    alert("Please enter a product to search.");\
    return;\
  \}\
  // Placeholder response\
  alert("You searched for: " + query + "\\n(Here you would connect AI + affiliate links)");\
\}\
\
// Example trending products (static for now)\
const trendingProducts = ["Wireless Earbuds", "Smart Watches", "Gaming Keyboards"];\
const trendingDiv = document.getElementById("trending");\
\
trendingProducts.forEach(item => \{\
  const card = document.createElement("div");\
  card.className = "card";\
  card.textContent = item;\
  trendingDiv.appendChild(card);\
\});}