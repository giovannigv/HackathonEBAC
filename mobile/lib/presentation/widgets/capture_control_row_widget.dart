import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

Widget captureControlRowWidget(
  CameraController? controller,
  void Function() onTakePictureButtonPressed,
) {
  return IconButton(
    icon: const Icon(Icons.camera_alt),
    color: Colors.blue,
    onPressed:
        controller != null && controller.value.isInitialized ? onTakePictureButtonPressed : null,
  );
}
