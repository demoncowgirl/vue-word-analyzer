var form = new Vue({

	el: '#main',
    data: {
            inputText: "",
						wordCount: 0,
						charCount: 0,
						sentCount: 0,
					},

	methods: {

  	wordAnalysis: function() {

    	var temp = this.inputText;

    	var count = 0;
    	var text = temp;
    	var words = text.split(" ");

			if(temp == ""){
				return 0;
			}

    	for (var i = 0; i < words.length; i++){
        count++;
    	}

			var ct = 0;
			var charArray=[];
			charArray=temp.split();

			// for (var j = 0; j <charArray.length; j++){
			// 	console.log(charArray.charAt(j));
			// 		if(charArray[j] != ""){
			// 			ct++;
			// 			countChars++;
					}
			}

				this.wordCount = count;
				this.charCount= ct;

  	},

	},

});

  // function setFocusToTextBox(){
  //     document.getElementByTag("input").focus();
  // }
