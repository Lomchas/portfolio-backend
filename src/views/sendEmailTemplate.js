module.exports = emailHtml = (name, email, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        .header, .footer {
            background: #22365D;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .content {
            background: #fff;
            padding: 20px;
            border-right: 1px solid rgb(0, 0, 0);
            border-left: 1px solid rgb(0, 0, 0);
        }
        h1 {
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nuevo mensaje del portafolio</h1>
        </div>
        <div class="content">
            <p>Hola,</p>
            <p>Has recibido un nuevo mensaje a través de tu portafolio.</p>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Portafolio Daniel Losada. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>
`;