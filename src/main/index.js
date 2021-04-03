import Stage from './component/Stage.svelte';
import '../libs/createjs.min';
const app = new Stage({
    target: document.body,
    props: {
        canvasId: 'demoCanvas',
        height: 400,
        width: 400
    },
});
app.init();
export default app;