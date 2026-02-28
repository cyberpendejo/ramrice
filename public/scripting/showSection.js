// Heto po iyong script para sa showSections 02/022/2026 -Aldo Gardose
function showSection(id){
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
