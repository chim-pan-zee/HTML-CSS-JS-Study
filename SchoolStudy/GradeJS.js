<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const score = prompt("성적을 입력하십시요.");
      Number(score);

      if (isNaN(score)) {
        document.write("ERROR");
      } else if (score >= 80) {
        document.write("A점");
      } else if (score < 80 && score >= 60) {
        document.write("B점");
      } else if (score < 60 && score >= 40) {
        document.write("C점");
      } else if (score < 40) {
        document.write("F점~넌 나가라");
      }
    </script>
  </body>
</html>
