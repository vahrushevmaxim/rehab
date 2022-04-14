<h3>Структура стартового папки проекта</h3>
<ul>
   <li><code><b>gulp/</b></code>
      <ul>
         <li><code>config/</code>
           <ul>
               <li><code>ftp.js настройка для фтп сервера</code></li>
               <li><code>path.js</code></li>
               <li><code>plugins.js</code></li>
           </ul>
         </li>
         <li><code>tasks/</code>
          <ul>
               <li>
                  <code>copy.js</code> отвечает за копирование из папки  </code>
                  <code>fonts/</code>
               </li>
               <li><code>fonts.js</code> самый большой по коду файл, ищет по проекту шрифты  otf, ttf и др. otf, ttf - преобразует в woff и woff2 - не отслеживается</li>
               <li><code>ftp.js</code> отправляет на фтп сервер в папку указаную в файле path в объекте path</li>
               <li><code>html.js</code> здесь обработка и сборка .html или .pug файлов</li>
               <li><code>images.js</code> обрабатываем картинк, при <code>mode: production</code> webp и обработает картки</li>
               <li><code>js.js</code></li>
               <li><code>reset.js</code></li>
               <li><code>scss.js</code></li>
               <li><code>server.js</code></li>
               <li><code>svgSprive.js</code></li>
               <li><code>zip.js</code></li>
           </ul>
         </li>
      </ul>
   </li>
   <li><code><b>node_modules/</b></code></li>
   <li><code><b>src/</b></code>
      <ul>
         <li><code>files/</code>  размещаются файлы которые нужно перенести в том виде в котором они сейчас находятся</li>
         <li><code>fonts/</code></li>
         <li><code>html/</code>  Размещаются шаблоны, компоненты, части, элементы от HTML или PUG
         </li>
         <li><code>img/</code></li>
         <li><code>js/</code>  размещаются в корне app.js в нем импорты</li>
            <ul>
               <li><code>modules/</code> размещаются модули(по не обходимости можно добавлять другие директории</li>
            </ul>
         <li><code>scss/</code></li>
         <li><code>svgicons/</code>   помещаются SVG файлы для создания sprites из SVG</li>
      </ul>
   </li>
   <li><code><b>.gitattributes</b></code></li>
   <li><code><b>.gitignore</b></code></li>
   <li><code><b>gulpfile.js</b></code></li>
   <li><code><b>package-lock.json</b></code></li>
   <li><code><b>package.json</b></code></li>
</ul>
<h3>Стартовая настройка проекта</h3>
   <p>
   В корне проекта не должно быть файла package-lock.json, папки node_modules - если они есть удалите их.
   </p>
   <ol>
     <li>Если не установлен node.js переходим 
         <code>
            <a href="https://nodejs.org/en/">
               https://nodejs.org/en/
            </a>
         </code>
         скачиваем и устанавливаем
      </li>
      <li>
         <code>npm init</code>
      </li>
      <li>
         <code>npm install --global gulp-cli</code>
      </li>
      <li>
         <code>npm install --save-dev gulp</code>
      </li>
       <li>
         <code>npm i</code>
      </li>
   </ol>
<h3>Команды консоли для запуска gulp и отдельных task(задач)</h3>
  <ul>
      <li>
         <code>npm run dev</code> сборка развернутая не минимизированная
      </li>
       <li>
         <code>npm run build</code> - чистовая сборка
      </li>
       <li>
         <code>npm run zip</code> создает zip архив в корень папки
      </li>
       <li>
         <code>npm run deploy</code> - отправляет build сбоку на сервер указанный в config -> ftp
      </li>
      <li>
         <code>npm run svgSprive</code> - создает svg sprite
      </li>
   </ul>
<h3>Настройка путей</h3>
   <h4>Если редактор VS Code:<h4>
         <ol>
            <li>Установить Path Autocomplete</li>
            <li>Нажать F1</li>
            <li>набираем Open Settings - выбираем где JSON</li>
            <li>Вставляем после последней строки через запятую:
<pre style="background: #fff; color: #000;">
"path-autocomplete.pathMappings": {
   "@img": "${folder}/src/img", // alias for images
   "@scss": "${folder}/src/scss", // alias for scss
   "@js": "${folder}/src/js", // alias for js
   }   
</pre>
            </li>
         </ol>

 <h3>Список плагинов - если каким либо образом не скачался package.json</h3>
   <ul>
      <li><code>"browser-sync": "latest"</code></li>
      <li><code>"del": "latest"</code></li>
      <li><code>"gulp": "latest"</code></li>
      <li><code>"gulp-autoprefixer": "latest"</code></li>
      <li><code>"gulp-clean-css": "latest"</code></li>
      <li><code>"gulp-cli": "latest"</code></li>
      <li><code>"gulp-file-include": "latest"</code></li>
      <li><code>"gulp-fonter": "latest"</code></li>
      <li><code>"gulp-group-css-media-queries": "latest"</code></li>
      <li><code>"gulp-if": "latest"</code></li>
      <li><code>"gulp-imagemin": "latest"</code></li>
      <li><code>"gulp-newer": "latest"</code></li>
      <li><code>"gulp-notify": "latest"</code></li>
      <li><code>"gulp-plumber": "latest"</code></li>
      <li><code>"gulp-pug": "latest"</code></li>
      <li><code>"gulp-rename": "latest"</code></li>
      <li><code>"gulp-replace": "latest"</code></li>
      <li><code>"gulp-sass": "latest"</code></li>
      <li><code>"gulp-svg-sprite": "latest"</code></li>
      <li><code>"gulp-ttf2woff2": "latest"</code></li>
      <li><code>"gulp-util": "latest"</code></li>
      <li><code>"gulp-version-number": "latest"</code></li>
      <li><code>"gulp-webp": "latest"</code></li>
      <li><code>"gulp-webp-html-nosvg": "latest"</code></li>
      <li><code>"gulp-webpcss": "latest"</code></li>
      <li><code>"gulp-zip": "latest"</code></li>
      <li><code>"sass": "latest"</code></li>
      <li><code>"swiper": "latest"</code></li>
      <li><code>"vinyl-ftp": "latest"</code></li>
      <li><code>"webp-converter": "2.2.3"</code></li>
      <li><code>"webpack": "latest"</code></li>
      <li><code>"webpack-stream": "latest"</code></li>
   </ul>
  
 <h3>Настройка package.json</h3>
 <h3>Работа с импортами на проекте в файлах js</h3>

 <h3>Настройка работа в HTML c импортами </h3>
 <h3>Настройка работа в PUG c импортами </h3>
 <h3>Рекомендации по структуре scss</h3>
 <h3>Рекомендации по структуре js</h3>
 <h3>Рекомендации по структуре html/pug</h3>
 <h3>FAQ - Ответы на вопросы:</h3>
 <h4>Как понять что часть task и его .pipe работает с разными режимами mode?</h4>

