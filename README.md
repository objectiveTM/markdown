# markdown
마크다운을 쉽게할수있는거에요!

## 예시
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="md.js"></script>
</head>
<body>
    <textarea id="inp"></textarea>
    <div id="a"></div>

    <script>
        ani = () =>{
            console.log(markdown(document.getElementById("inp").value))
            document.getElementById("a").innerHTML = markdown(document.getElementById("inp").value)
            requestAnimationFrame(ani)
        }
        ani()
    </script>
</body>
</html>
```
## 도와주신분
[`@awesomeSwam`](https://github.com/awesomeSwam)
