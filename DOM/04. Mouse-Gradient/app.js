function attachGradientEvents() {
    document.getElementById("gradient").addEventListener('mousemove', onMove);

    function onMove() {
        const offsetX = event.pageX - event.target.offsetLeft; // offsetx.OFFSETX
        const percent = Math.round(offsetX / event.target.clientWidth * 100);
        document.getElementById("result").textContent = `${percent}`;
    }
}