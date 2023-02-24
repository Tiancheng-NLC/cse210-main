<template>
  <div id="tempsearchresults" class="float-child">
    <div class="card" style="width: 14rem; height: 16rem;">
      <img class="card-img-top" src="../img/mark-dp.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Brian Li</h5>
        <p class="card-text">25 years (Male)</p>
        <p class="card-text">Budget: $1000 to $1500</p>
        <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
      </div>
    </div>
  </div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div style="height: 255px; background-color: rgba(0, 128, 0,0.2); padding: 8px; text-align: right;">
        <div class="h-100" style="width: 30%; display: inline-block;">
          <img class="card-img-top img-thumbnail" src="../img/mark-dp.jpg" alt="Card image cap">
          <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#myModal"></a>
          <button class="btn btn-primary" style="width: 100%; margin-top: 3px;">Send Invite </button>
        </div>
        <div class="h-100 d-inline-block" style="width: 3%; padding-left: 5px; display: inline-block; float: right;">
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="h-100  float-right" style="width: 67%; padding-left: 10px; display: inline-block; float: right;">
            <h4 class="card-title" style="margin-top: 25px;">Brian Li</h4>
            <p class="profile-card-text">25 years (Male)</p>
            <p class="profile-card-text">Budget: $1000 to $1500 per month</p>          
            <table class="table table-bordered" style="margin-top: 15px; text-align: center;">
            <thead>
              <tr class="table-dark">
                <th scope="col">Occupation</th>
                <th scope="col">Smoking</th>
                <th scope="col">Pets</th>
                <th scope="col">Vegan</th>
                <th scope="col">Sleep Early</th>
                <th scope="col">Wake Up Early</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-secondary">
                <td>Student</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
      <div class="modal-body">
        <p style="text-align: left;">I graduated from UCSD in 2022 and am currently working at a biotech lab in Sorrento Valley. I am a very clean person and roommate, who loves to cook, and bake. I keep my room clean and ensure my belongings don’t clutter the common spaces. I don’t have pets and am allergic to cats. I mostly keep to myself and play a lot of videogames. I smoke weed and drink occasionally. Would like to move in around end of March/April 2023. </p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.modal-body-title{
  text-align: left;
  color: #006400;
  font-weight: 900;
}

.img-thumbnail{
  height: 100%;
  width: 100%;
}
.card-img-top {
    width: 100%;
    height: 12rem;
    object-fit: cover;
}
h5{
  margin: 0;
}
p {
margin: 0;
}
.card-body{
  padding: 10px;
}
.card-title{
  text-align: left;
  color: black;
  font-weight: 900;
}
.card-text{
  text-align: left;
  color: black;
}
.profile-card-text{
  text-align: left;
  color: black;
  font-size: large;
}
#tempsearchresults {
  position: relative;
  height: 85vh;
  background-color: #e5e5e5;
}
#temp_search {
  text-align: center;
  position: relative;
  top: 30%;
  font-size: 60px;
  font-weight: bolder;
}
#search {
  background-color: #fff;
}
table, th, td {
  border: 0.75px solid;
  border-bottom: 1px solid;
}
</style>
