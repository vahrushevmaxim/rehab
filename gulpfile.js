// Основные модули
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";
// Передаем значение в глобальную перменную
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Наблюдатель за изминениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy); // если нужно постоянное обновление на ftp => copy заменить на gulp.series(html, ftp)
   gulp.watch(path.watch.html, html);// если нужно постоянное обновление на ftp => html заменить на gulp.series(html, ftp)
   gulp.watch(path.watch.scss, scss);// если нужно постоянное обновление на ftp => scss заменить на gulp.series(html, ftp)
   gulp.watch(path.watch.js, js);// если нужно постоянное обновление на ftp => js заменить на gulp.series(html, ftp)
   gulp.watch(path.watch.images, images);// если нужно постоянное обновление на ftp => images заменить на gulp.series(html, ftp)
}

export{ svgSprive }

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основная задача
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);


// Экспорт сценариев
export {dev};
export {build};
export {deployZIP};
export {deployFTP};

// Выполняем сценарий по умолчанию
gulp.task('default', dev);