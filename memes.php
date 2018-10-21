<?

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");

$json = array();

foreach (glob("*.jpg") as $filename) {
    array_push($json, "http://students.washington.edu/joncady/dubhacks/memes/" . $filename);
}   

echo json_encode($json);

?>