console.log('HELLO PREVIEW');

// TODO maybe this can live-preview the mardown before submission?

var app = new Vue({
  el: '#preview',
  data: {
    input: '',
    title: ''
  },
  computed: {
    preview: function(){
      return markdown.toHTML(this.input)
    }
  },
  methods: {
    generatePreview: function(){
      console.log('preview');
    }
  }
})
