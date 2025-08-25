{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <!DOCTYPE html>\
<html lang="en">\
<head>\
  <meta charset="UTF-8">\
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\
  <title>Ad-Squre</title>\
  <style>\
    body \{\
      font-family: Arial, sans-serif;\
      margin: 0;\
      padding: 0;\
      background: #f4f4f9;\
      color: #333;\
      text-align: center;\
    \}\
    header \{\
      background: #222;\
      color: #fff;\
      padding: 20px 10px;\
    \}\
    header h1 \{\
      margin: 0;\
    \}\
    section \{\
      padding: 40px 20px;\
    \}\
    button \{\
      background: #0077ff;\
      color: #fff;\
      border: none;\
      padding: 12px 20px;\
      border-radius: 6px;\
      font-size: 16px;\
      cursor: pointer;\
    \}\
    button:hover \{\
      background: #005bcc;\
    \}\
    footer \{\
      margin-top: 40px;\
      padding: 15px;\
      background: #222;\
      color: #fff;\
    \}\
  </style>\
</head>\
<body>\
  <header>\
    <h1>Ad-Squre</h1>\
    <p>Your smart product finder</p>\
  </header>\
\
  <section>\
    <h2>Search for a Product</h2>\
    <input type="text" id="search" placeholder="Type a product..." style="padding:10px; width:250px;">\
    <br><br>\
    <button onclick="searchProduct()">Search</button>\
    <p id="result"></p>\
  </section>\
\
  <footer>\
    <p>\'a9 2025 Ad-Squre | Powered by AI</p>\
  </footer>\
\
  <script>\
    function searchProduct() \{\
      const query = document.getElementById("search").value;\
      const result = document.getElementById("result");\
      \
      if(query.trim() === "") \{\
        result.innerText = "Please enter a product.";\
      \} else \{\
        result.innerText = "Searching for: " + query + "... (AI suggestions will go here)";\
      \}\
    \}\
  </script>\
</body>\
</html>}
