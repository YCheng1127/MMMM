                       
			var camera, scene, renderer;
			var mesh;
			init();
			
			function init() {
				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 1000;
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x87CEEB);
				
				var texture1 = new THREE.TextureLoader().load( 'intro5.jpg');
				var geometry1 = new THREE.PlaneBufferGeometry( 300, 300, 4, 4 );
				var material1= new THREE.MeshBasicMaterial({ map: texture1});
				mesh1=new THREE.Mesh(geometry1,material1);
				scene.add(mesh1);
				mesh1.position.z=150;

                                var texture2 = new THREE.TextureLoader().load( 'intro2.jpg');
				var geometry2 = new THREE.PlaneBufferGeometry( 300, 300, 4, 4 );
				var material2= new THREE.MeshBasicMaterial({ map: texture2});
				mesh2=new THREE.Mesh(geometry2,material2);
				scene.add(mesh2);
				mesh2.position.x=150;
				mesh2.rotation.y = Math.PI/2;

                                var texture3 = new THREE.TextureLoader().load( 'intro3.jpg');
				var geometry3 = new THREE.PlaneBufferGeometry( 300, 300, 4, 4 );
				var material3= new THREE.MeshBasicMaterial({ map: texture3});
				mesh3=new THREE.Mesh(geometry3,material3);
				scene.add(mesh3);
				mesh3.position.z=-150;
				mesh3.rotation.y = Math.PI;

                                var texture4 = new THREE.TextureLoader().load( 'intro4.jpg');
				var geometry4 = new THREE.PlaneBufferGeometry( 300, 300, 4, 4 );
				var material4= new THREE.MeshBasicMaterial({ map: texture4});
				mesh4=new THREE.Mesh(geometry4,material4);
				scene.add(mesh4);
				mesh4.position.x=-150;
				mesh4.rotation.y = Math.PI/2*3;

                                var texture5 = new THREE.TextureLoader().load( 'intro1.jpg');
				var geometry5 = new THREE.PlaneBufferGeometry( 300, 300, 4, 4 );
				var material5= new THREE.MeshBasicMaterial({ map: texture5});
				mesh5=new THREE.Mesh(geometry5,material5);
				scene.add(mesh5);
				mesh5.position.y=150;
				mesh5.rotation.x=-Math.PI/2;

                                var texture6 = new THREE.TextureLoader().load( 'intro6.jpg');
				var geometry6 = new THREE.PlaneBufferGeometry( 300, 300, 4, 4 );
				var material6= new THREE.MeshBasicMaterial({ map: texture6});
				mesh6=new THREE.Mesh(geometry6,material6);
				scene.add(mesh6);
				mesh6.position.y=-150;
				mesh6.rotation.x=Math.PI/2;
				
				//skybox
				var texture1b = new THREE.TextureLoader().load('negz.jpg');
				var geometry1b = new THREE.PlaneBufferGeometry(10000,10000,4,4);
				var material1b = new THREE.MeshBasicMaterial({map:texture1b});
				mesh1b = new THREE.Mesh(geometry1b,material1b);
				scene.add(mesh1b);
				mesh1b.position.z=5000;
				mesh1b.rotation.y=Math.PI;
				
				var texture2b = new THREE.TextureLoader().load('posx.jpg');
				var geometry2b = new THREE.PlaneBufferGeometry(10000,10000,4,4);
				var material2b = new THREE.MeshBasicMaterial({map:texture2b});
				mesh2b = new THREE.Mesh(geometry2b,material2b);
				scene.add(mesh2b);
				mesh2b.position.x=5000;
				mesh2b.rotation.y = -Math.PI/2;
			
				var texture3b = new THREE.TextureLoader().load('posz.jpg');
				var geometry3b = new THREE.PlaneBufferGeometry(10000,10000,4,4);
				var material3b = new THREE.MeshBasicMaterial({map:texture3b});
				mesh3b = new THREE.Mesh(geometry3b,material3b);
				scene.add(mesh3b);
				mesh3b.position.z=-5000;
				mesh3b.rotation.y = 0;
			
				var texture4b = new THREE.TextureLoader().load('negx.jpg');
				var geometry4b = new THREE.PlaneBufferGeometry(10000,10000,4,4);
				var material4b = new THREE.MeshBasicMaterial({map:texture4b});
				mesh4b = new THREE.Mesh(geometry4b,material4b);
				scene.add(mesh4b);
				mesh4b.position.x=-5000;
				mesh4b.rotation.y = -Math.PI/2*3;


				var texture5b = new THREE.TextureLoader().load('posy.jpg');
				var geometry5b = new THREE.PlaneBufferGeometry(10000,10000,4,4);
				var material5b = new THREE.MeshBasicMaterial({map:texture5b});
				mesh5b = new THREE.Mesh(geometry5b,material5b);
				scene.add(mesh5b);
				mesh5b.position.y=5000;
				mesh5b.rotation.x=Math.PI/2;

				var texture6b = new THREE.TextureLoader().load('negy.jpg');
				var geometry6b = new THREE.PlaneBufferGeometry(10000,10000,4,4);
				var material6b = new THREE.MeshBasicMaterial({map:texture6b});
				mesh6b = new THREE.Mesh(geometry6b,material6b);
				scene.add(mesh6b);
				mesh6b.position.y=-5000;
				mesh6b.rotation.x=-Math.PI/2;
				

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}


var intervalnum=0;
var tj=0;
var ON=1;
var tj2=0;
var ON2=1;

function camerazoomclose(cam,t,ON){
if(ON==0&&t<=180.4511278){
if(cam.position.z>0)
cam.position.z-=133.3333/60;
else
cam.position.z+=133.3333/60;
}

}

function boxrotate(m1,m2,m3,m4,m5,m6,t)
{
var circle=6;
var Ctar=2*Math.PI*6;
var w=4*2*Math.PI;
var aw=w*w/2/Ctar;
var degree=w*t/60-0.5*aw*t/60*t/60;
console.log('degree='+degree);

mesh1.position.x=150*Math.cos(3/2*Math.PI+degree);
mesh1.position.z=-150*Math.sin(3/2*Math.PI+degree);
mesh1.rotation.y=degree;

mesh2.position.x=150*Math.cos(degree);
mesh2.position.z=-150*Math.sin(degree);
mesh2.rotation.y=1/2*Math.PI+degree;

mesh3.position.x=150*Math.cos(1/2*Math.PI+degree);
mesh3.position.z=-150*Math.sin(1/2*Math.PI+degree);
mesh3.rotation.y=Math.PI+degree;

mesh4.position.x=150*Math.cos(Math.PI+degree);
mesh4.position.z=-150*Math.sin(Math.PI+degree);
mesh4.rotation.y=3/2*Math.PI+degree;
mesh5.setRotationFromEuler(new THREE.Euler(-1.57,0,degree, 'XYZ' ));
mesh6.setRotationFromEuler(new THREE.Euler(1.57,0,-degree, 'XYZ' ));
}


function boxjump(m1,m2,m3,m4,m5,m6,t){
				var g=266;
				var Vjump=400;
				m1.position.y=Vjump*t/60-0.5*g*t/60*t/60;
				m2.position.y=Vjump*t/60-0.5*g*t/60*t/60;
				m3.position.y=Vjump*t/60-0.5*g*t/60*t/60;
				m4.position.y=Vjump*t/60-0.5*g*t/60*t/60;
				m5.position.y=150+Vjump*t/60-0.5*g*t/60*t/60;
				m6.position.y=-150+Vjump*t/60-0.5*g*t/60*t/60;

}



controls = new THREE.OrbitControls(camera, renderer.domElement);
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				requestAnimationFrame( animate );
				if(ON==1)
				tj+=1;
				if(tj>=180.4511278)
				ON=0;
				boxjump(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,tj);
				boxrotate(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,tj);
				
				console.log('tj2='+tj2);
				
				if(ON==0&&ON2==1)
				tj2+=1;
				if(tj2>=180.4511278)
				ON2=0;
				camerazoomclose(camera,tj2,ON);				

				controls.update();
				renderer.render( scene, camera );
			}


                        animate();
