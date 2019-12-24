# Mi-Modal
### Simple Modal with HTML, CSS and JS 
You can add this to your HTML site by:
- Copying or creating the `<div class="mi-modal-cont">` element with `<div class="mi-modal">` as it's child
- You can either copy from the html file, the entire modal elements and tweak it to your taste or create your own, you just need the class `class="mi-modal-cont"` and `class="mi-modal"`
- Insert the stylesheet in the head tag `<link rel="stylesheet" href="mimodal.css">`
- Insert the script just before the end of the body tag `<script src="mimodal.js">`
- Your trigger button should have an id of `mi-modal-btn`

It should a little something like this

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="mimodal.css">
</head>
<body>
    
       ** <div class="mi-modal-cont"> **
          ** <div class="mi-modal"> **
                <div class="modal-content-wrapper">
                    <div class="header-cont">
                        <h1>Login</h1>
                    </div>
                    <div class="inputs-container">
                        
                        <div class="input-cont">
                            <input type="text" name="username" id="username" required>
                            <label for="username"><span>Username</span></label>
                        </div>
                        <div class="input-cont">
                            <input type="password" name="password" id="password" required>
                            <label for="password"><span>Password</span></label>
                        </div>
                        <div class="submit-cont"><button type="submit">Submit</button></div>    
                    </div>
                </div>
            </div>
        </div>
    
   ** <button id="mi-modal-btn" class="mi-modal-btn">Login</button> **
    
    <script src="./script.js"></script>
</body>
</html>

```

