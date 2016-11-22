new Vue ({
    el: "#app",
    data: {
        name: "Allan Vigiano",
        age: 29,
        imageLink: "http://www.dragoart.com/5/tutorials/11939/how-to-draw-iron-man-easy-tutorial-picture.png"
    },
    methods: {
        getRandom: function () {
            return Math.random();
        }
    }
});