const app = "I don't do much."

// left is 37
// right is 39

document.addEventListener('keydown', function(e) {

  if (e.which === 37){
    var position = dodger.style.left.replace("px", "")

    if (position > 0){
      var left_one_pix = parseInt(position - 1 )
    } else {
      alert('cant go further!')
      return 
    }

    dodger.style.left = `${left_one_pix.toString()}px`
} else if (e.which === 39){

  var position = dodger.style.left.replace("px", "")

  if (position < 360){
    var right_one_pix = parseInt(position) + 1
  } else {
    alert('cant go further!')
    return
  }

  dodger.style.left = `${right_one_pix.toString()}px`
  }
})
