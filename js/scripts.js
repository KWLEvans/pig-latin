//Back-end
function isALetter(letter) {
  return letter.match(/[a-z]/i);
}

function isAVowel(letter) {
  return letter.match(/[aeiou]/i);
}

function isQ(string) {
  return string.match(/(q)/i);
}

function translate(input) {
  var result = "";
  if (isALetter(input)) {
    if (!isAVowel(input[0])) {
      var sliceIndex;

      for (var i = 0; i < input.length; i++) {
        if (isQ(input[i])) {
          if (input[i + 1].toLowerCase() === 'u') {
            sliceIndex = i + 2;
          }else{
            sliceIndex = i + 1;
          }
          break;
        }
        else if (isAVowel(input[i])) {
          sliceIndex = i;
          break;
        }
      }

      var firstLetter = input.slice(0,sliceIndex);
      var restOfInput = input.slice(sliceIndex,(input.length));
      result = restOfInput + firstLetter + "ay";

    }else{
      result += (input + "ay");
    }
  }
  return result;
}

function translateString(string) {
  var result = "";
  var words = string.split(" ");
  words.forEach(function(word) {
    word = translate(word);
    result += (word + " ");
  });
  return result;
}

//Front-end
$(function() {
  function showResult(result) {
    $("#result").text(result);
  }

  $("#translator").submit(function(event) {
    event.preventDefault();

    var input = $("#translator input").val();
    var result = translateString(input);

    showResult(result);
  })
});
