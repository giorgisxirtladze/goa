<script>
    let result = confirm("გსურთ გაგრძელება?");
    console.log(result);
</script>

<button onclick="checkConfirm()">დააჭირე</button>
<script>
    function checkConfirm() {
        let userChoice = confirm("დარწმუნებული ხარ?");
        console.log(userChoice);
    }
</script>

<script>
    window.onload = function() {
        let confirmation = confirm("დარწმუნებული ხარ?");
        alert("შენ აირჩიე: " + confirmation);
    };
</script>
w