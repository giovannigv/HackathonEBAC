import 'package:camera/camera.dart';
import 'package:mobile/core/extensions/build_context_utils.dart';
import 'package:flutter/material.dart';

Widget cameraPreviewWidget(CameraController? controller, BuildContext context) {
  if (controller == null || !controller.value.isInitialized) {
    return const Text(
      'Selecione a camera',
      style: TextStyle(
        color: Colors.white,
        fontSize: 24.0,
        fontWeight: FontWeight.w900,
      ),
    );
  } else {
    return SafeArea(
      child: Column(
        children: [
          Expanded(
            child: Container(
              color: Colors.black.withOpacity(0.5),
              child: Stack(
                children: [
                  SizedBox(
                    width: context.mediaWidth * 1.0,
                    child: CameraPreview(controller),
                  ),
                  Center(
                    child: SizedBox(
                      height: 516,
                      width: 361,
                      child: Image.asset("assets/rectangle-ia.png"),
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
