<?php

namespace App\Helpers;

use GuzzleHttp;
class Guzzle {

	public static function getData() {
		$client = new GuzzleHttp\Client();
		//$client->setDefaultOption('verify', false);
		try {
			$response = $client->get("https://invoice.zoho.com/api/v3/invoices?authtoken=d76851bc47ec38a79fae531429335b74&organization_id=641654789");
			return json_decode($response->getBody());
		} catch (BadResponseException $e){
			return json_decode($e->getResponse()->getBody(true));
		} catch (\Exception $e) {
			return false;
		}
	}
}
