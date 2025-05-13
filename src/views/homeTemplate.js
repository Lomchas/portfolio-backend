module.exports = welcomePage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to My Portfolio API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #f0f0f0;
                }

                .container {
                    width: 50vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                    text-align: center;
                    padding: 25px;
                    background-color: #fff;
                    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
                    border-radius: 20px;
                    overflow:hidden;
                }

                p{
                    margin: 0;
                }
                
                .container-img{
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    overflow: hidden;
                    border-radius: 50% 50% 0 0;
                    width: 200px;
                    height: 250px;
                    background-color: #22365D;
                }

                .container-img img {
                    width: 100%
                }

                .container-btn {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                    gap: 30px;
                    padding: 20px
                }

                .container-btn a{
                    text-decoration: none;
                    color: black;
                    padding: 5px;
                    border-bottom: 1px solid black;
                    transition: all .2s ease-in-out;
                    border-radius: 10px 10px 0 0;
                    background-color: transparent;
                }    

                .container-btn a:hover{
                    transform: scale(1.1);
                    box-shadow: 0 5px 4px rgb(0, 0, 0, 0.8);
                    color: blue;
                }

            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My Portfolio API</h1>
                <p>Hi there! This is the backend of my portfolio where you can find various projects and information about my work. Stay tuned for more updates!</p>
                <div class="container-img">
                    <img src="/assets/profile.png" alt="Profile">
                </div>
                <div class="container-btn">
                    <a href="aboutMe">🧑‍💻Know more about Me.</a>
                    <a href="experiences">🦾Do you want to see my skills?</a>
                    <a href="portfolioDaniellosada/projects">📁Check my projects out.</a>
                </div>
            </div>
        </body>
        </html>
    `