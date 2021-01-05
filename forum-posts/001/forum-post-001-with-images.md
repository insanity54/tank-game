I would like to make a tank game using Heaps, where the tank remains stationary, but the player can control the rotation of the tank's turret and cannon.

I have a 3D model that I made in Blender.

![Screenshot from 2020-12-21 05-10-30|690x409, 75%](upload://nHDlfDujZ5qxWGnTStKphurjQqJ.jpeg)

The thing I am unsure of, is how to code the tank rotation behavior in Haxe/Heaps. So far, I have brought the model into the Heaps world

```haxe
    function createTank() {
      var cache = new h3d.prim.ModelCache();
      tank = cache.loadModel(hxd.Res.Tank1);
      tank.scale(1);
      s3d.addChild(tank);
    }
```

![tank-in-heaps|681x499, 75%](upload://bAtxpcljTKR6eYB7W2q42xMNRky.jpeg) 

I have been toying around with rotating the tank with tweening using Actuate

```haxe
    function updateTankPosition(az: Float, el: Float, pow: Float) {
        var targetAz = degToRad(az);
        Actuate.update(tank.setRotation, 2, [0, 0, lastAz], [0, 0, targetAz]);
        lastAz = targetAz;
    }
```

There are three parts of the tank. **Hull**, **Turret**, and **Cannon**. The issue I have at the moment is that I only want two out of the three parts to rotate, but I have no idea what the best way to do this would be.

I want the cannon to act as a child of the turret, and rotate together with the turret on the Z axis. Then I want the cannon to rotate independently on the X azis relative to the turret.

https://youtu.be/2E6g1j85kmo
*example tank turret & cannon rotation*

I made some armature bones in Blender as seen in the first screenshot. This was just an idea but I'm not married to this idea. The idea was to animate individual bones in Heaps, but I'm not seeing a clear-cut way to do that. I also had the idea of creating a turret rotation animation in Blender, and triggering that animation in Heaps using `h3d.scene.playAnimation()`, pausing the animation, and setting it to a specific frame to match the desired angle. That seems kind of clunky to me and only addresses one of the two rotations that I desire. I'd like to think there's a better way.

How do you think I should go about achieving this motion in Heaps engine?

