<template>
  <div>
  <div>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
    <div style="text-align: center;">
    <div v-for="fountain in fountains" v-bind:key="fountain">
      <div v-if="fountain.id === getid()" class="center">

                  <h1>Sci-Tech Public Water Fountain Rating System</h1>
                  <div class="boxed">
                    <h3>{{fountain.name}}</h3>

                    <img :src="fountain.source" alt="150x1der Image" class="scaledown align-self-center">
                    <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label for="star5" title="text">5 stars</label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label for="star4" title="text">4 stars</label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label for="star3" title="text">3 stars</label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label for="star2" title="text">2 stars</label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label for="star1" title="text">1 star</label>
                    </div>
                  </div>
      </div>
    </div>


  </div>
    <b-button block variant="warning" class="bottom" v-on:click="next(); storeStars()">Next</b-button>
    <b-button block variant="danger" class="bottom-2" v-on:click="restart()">Restart</b-button>
  </div>
  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data() {
    return {
      current: {
        name: null,
        id: null,
        source: null
      },
      fountains:
          [
            {
              name: "Frost",
              id: "1",
              source: require('@/assets/images/Frost.jpg')
            },
            {
              name: "Chadar Ochel",
              id: "2",
              source: require('@/assets/images/Hadar Ochel.jpg')
            },
            {
              name: 'Sagan',
              id: '3',
              source: require('@/assets/images/Sagan.jpg')
            },
            {
              name: 'Baer',
              id: '4',
              source: require('@/assets/images/Baer.jpg')
            },
            {
              name: 'Elion',
              id: '5',
              source: require('@/assets/images/E-Lion.jpg')
            },
            {
              name: 'Field House',
              id: '6',
              source: require('@/assets/images/Field House.jpg')
            },
            {
              name: 'Downstairs Chadar',
              id: '7',
              source: require('@/assets/images/Hadar downstairs.jpg')
            },
            {
              name: 'Hockey Rink',
              id: '8',
              source: require('@/assets/images/Hockey ring.jpg')
            },
            {
              name: 'Katz',
              id: '9',
              source: require('@/assets/images/Katz.jpg')
            },
            {
              name: 'Library',
              id: '10',
              source: require('@/assets/images/Library filler.jpg')
            },
            {
              name: 'PAC',
              id: '11',
              source: require('@/assets/images/PAC.jpg')
            },
            {
              name: 'Parsons',
              id: '12',
              source: require('@/assets/images/Parsons.jpg')
            },
            {
              name: 'Rosie',
              id: '13',
              source: require('@/assets/images/Rosie.jpg')
            },
            {
              name: 'Sagan',
              id: '14',
              source: require('@/assets/images/Sagan.jpg')
            },
            {
              name: 'Technion',
              id: '15',
              source: require('@/assets/images/Technion.jpg')
            }
          ],
    }
  },
  created: function () {

  },
  methods: {
    getid() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get('id')

    },
    next() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const num = urlParams.get('id')
      const int = parseInt(num)
      const nextint = int + 1
      window.location.replace(window.location.protocol + "//" + window.location.host + '/?id=' + nextint.toString())
    },
    restart() {
      window.location.replace(window.location.protocol + "//" + window.location.host + '/?id=' + '1')
    },
    storeStars(id) {
      var radios = document.getElementsByName('rate');

      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          if (localStorage.getItem(id)) {
            // eslint-disable-next-line no-unused-vars
            let val = localStorage.getItem(id)
          }
          else {
            let val = 0
          }
          val = radios[i].value + val
          localStorage.setItem(id, radios[i].value)

          // only one radio can be logically checked, don't check the rest
          break;
        }
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bottom {
  position: absolute;
  bottom: 50px;
}

.bottom-2 {
  position: absolute;
  bottom: 25px
}

.center {
  display: inline-block;
  height: 30px;
}

.scaledown {
  height: 300px;
}

.rb {
  position: absolute;
  right: 0;
  bottom: 0;
}

* {
  margin: 0;
  padding: 0;
}

.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}

.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}

.rate:not(:checked) > label:before {
  content: '★ ';
}

.rate > input:checked ~ label {
  color: #ffc700;
}

.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}

.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

/* Modified from: https://github.com/mukulkant/Star-rating-using-pure-css */


body {
  background-color: orange;
}
h1, p {
  font-family: 'Work Sans', sans-serif;
}


.stars input {
  position: absolute;
  left: -999999px;
}

.stars span a {
  display: inline-block;
  padding-right:4px;
  text-decoration: none;
  margin:0;
}

.stars span a:after {
  position: relative;
  font-size: 18px;
  font-family: 'FontAwesome', serif;
  display: block;
  content: "\f005";
  color: #9e9e9e;
}


span {
  font-size: 0; /* trick to remove inline-element's margin */
}

.stars span a:hover ~ a:after{
  color: #9e9e9e !important;
}
span.active a.active ~ a:after{
  color: #9e9e9e;
}

span:hover a:after{
  color:blue !important;
}

span.active a:after,
.stars a.active:after{
  color:blue;
}

.boxed {
  width: 300px;
  border: 1px solid black ;
}
</style>
