$(function () {
    var data = {
        cat1: {
            id: 1,
            image: "images/cat.jpg",
            title: "First",
            click: 0
        },
        cat2: {
            id: 2,
            image: "images/cat2.png",
            title: "Second",
            click: 0
        },
        cat3: {
            id: 3,
            image: "images/cat3.png",
            title: "Third",
            click: 0
        },
        cat4: {
            id: 4,
            image: "images/cat4.jpg",
            title: "Fourth",
            click: 0
        },
        cat5: {
            id: 5,
            image: "images/cat5.jpg",
            title: "Fifth",
            click: 0
        }
    };

    var octopus = {
        getCat: function (cat) {
            catView.init(cat);
        },

        addClick: function (cat) {
            ++cat.click;
            catView.render(cat);
        },

        init: function () {
            listView.init();
        }
    };

    var listView = {
        init: function () {
            Object.keys(data).forEach((item) => {
                var clickCat = $('#' + data[item].id);
                clickCat.click(async function () {
                    octopus.getCat(data[item]);
                })

            });
        }
    };

    var catView = {
        init: function (cat) {
            this.name = document.getElementById("title");
            this.count = document.getElementById("count");
            this.heart = document.getElementById("heart");
            this.img = document.getElementById("cat_img");
            $('#cat_img').click(function () {
                octopus.addClick(cat);
            });
            this.heart.innerHTML = '&#10084';
            this.render(cat);
        },
        render: function (cat) {
            this.name.innerHTML = cat.title + " Cat";
            this.count.innerHTML = cat.click;
            this.img.src = cat.image;
        }
    };

    octopus.init();
}());

