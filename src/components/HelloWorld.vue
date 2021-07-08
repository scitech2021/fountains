<template>
  <div>

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
    <div v-for="fountain in fountains" v-bind:key="fountain">
      <div v-if="fountain.id === getid()" style="float: left">
        <b-row>
          {{ fountain.name }}
        </b-row>
        <b-row>

          <b-col>


            <img :src="fountain.source" alt="" class="scaledown">
            <br>

          </b-col>
        </b-row>
      </div>
    </div>

    <b-button block variant="danger" v-on:click="next()">Next</b-button>
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
              source: "https://cdn.shopify.com/s/files/1/1276/8957/products/Parisienne_Two_Tier_Outdoor_Water_Fountain.jpg?v=1615722690"
            },
            {
              name: "Chadar Ochel",
              id: "2",
              source: "https://www.designingbuildings.co.uk/w/images/e/ee/Fountain.jpg"
            },
            {
              name: 'Sagan',
              id: '3',
              source: ''
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scaledown {
  width: 25%;
  height: 25%
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
</style>
