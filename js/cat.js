    var data = {
        cat_id: 0,
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
        getCat: function () {
            catView.init();
        },

        setCurrent: function (currentCat_id) {
            data.cat_id = currentCat_id;

        },

        getCurrent: function () {
            return data[Object.keys(data)[data.cat_id]];
        },

        addClick: function () {
            var currentCat = this.getCurrent();
            ++currentCat.click;
            catView.render();

        },

        init: function () {
            listView.init();
        }
    };

    var listView = {
        init: function () {
            Object.keys(data).forEach((item) => {
                if (data[item]) {
                    var clickCat = $('#' + data[item].id);
                    clickCat.click( function () {
                        octopus.setCurrent(data[item].id);
                        octopus.getCat();
                    })
                }

            });
        }
    };

    var catView = {
        init: function () {
            var currentCat = octopus.getCurrent();
            this.name = document.getElementById("title");
            this.count = document.getElementById("count");
            this.heart = document.getElementById("heart");
            this.img = document.getElementById("cat_img");
            this.img.innerHTML = '';
            var image = document.createElement('IMG');
            image.setAttribute('id', 'img_id');
            image.src = currentCat.image;
            this.img.appendChild(image);
            $('#img_id').click(function () {
                octopus.addClick();
            });
            this.heart.innerHTML = '&#10084';
            this.render();
        },
        render: function () {
            var currentCat = octopus.getCurrent();
            this.name.innerHTML = currentCat.title + " Cat";
            this.count.innerHTML = currentCat.click;
        }
    };

    octopus.init();