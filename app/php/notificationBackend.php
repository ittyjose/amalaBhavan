<?php
$date= $_GET["date"];
	$msg= $_GET["msg"];
	$sub= $_GET["sub"];
	 $message=$sub.$date.$msg;
function sendMessage(){
		$la="en";
		$content =array();
		$content[$la] = $message;
		$ke="include_player_ids";
		
		$fields = array(
			'app_id' => "ccdd4863-e26e-4677-acc6-5a8117709a8f",
      'data' => array("foo" => "bar"),
			'contents' => $content
		);
		$fields[$ke]=array($row["id"]);
		
		$fields = json_encode($fields);
    print("\nJSON sent:\n");
    print($fields);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
												   'Authorization: Basic MzFmMjA2OGItNTM2Ny00ZTIxLWI5ZWYtYTg5ZDMxYzlmMDhm'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

		$response = curl_exec($ch);
		curl_close($ch);
		
		return $response;
	}
	
	$response = sendMessage();
	$return["allresponses"] = $response;
	$return = json_encode( $return);
	
  print("\n\nJSON received:\n");
	print($return);
  print("\n");
    echo json_encode($row);
    } else {
        echo "Error";
    }
?>