namespace ComicBookStore.Controllers {

    export class HomeController {

        public comics; /*= [
            {
                imageUrl: 'http://vignette1.wikia.nocookie.net/marvel_dc/images/9/93/Adventures_of_Superman_424.jpg/revision/latest?cb=20060217164631',
                title: 'Superman',
                price: 4.99
            },

            {
                imageUrl: 'http://vignette3.wikia.nocookie.net/marveldatabase/images/8/84/Free_Comic_Book_Day_Vol_2007_Spider-Man.jpg/revision/latest?cb=20120602205007',
                title: 'Spiderman',
                price: 4.99
            },

            {
                imageUrl: 'http://static5.comicvine.com/uploads/scale_small/6/67663/1946579-01.jpg',
                title: 'Batman',
                price: 4.99
            },

            {
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/8a/db/01/8adb019058286b7e67df75a68d6915c7.jpg',
                title: 'Deadpool',
                price: 4.99
            },

            {
                imageUrl: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/729507.jpg',
                title: 'X-Men',
                price: 4.99
            }
        ]; */

        public start: number = 0;

        constructor($http: ng.IHttpService) {
            $http.get<any>('/api/comics/featured')
                .then((response) => {
                    this.comics = response.data;
                })
                .catch((response) => {
                    alert('There was an error');
                });
        }

        public moveLeft() {
            if (this.start > 0) {
                this.start--;
            }
        }
        public moveRight() {
            if (this.start < this.comics.length - 4) {
                this.start++;
            }
        }
    }


}
