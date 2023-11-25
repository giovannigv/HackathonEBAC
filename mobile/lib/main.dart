import 'dart:async';

import 'package:camera/camera.dart';
import 'package:mobile/presentation/camera_app.dart';
import 'package:flutter/material.dart';

List<CameraDescription> _cameras = [];

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  _cameras = await availableCameras();
  runApp(CameraApp(cameras: _cameras));
}
