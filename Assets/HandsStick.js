#pragma strict
 var Stuck : boolean;
 var INPUT : String;
function Update () {
	if(Input.GetKeyDown(INPUT)){Stuck = true;}
	if(!Input.GetKeyDown(INPUT)){Stuck = false;}
}
	
function OnCollisionEnter(c : Collision) {
var joint = gameObject.AddComponent(FixedJoint);
joint.connectedBody = c.rigidbody;
}