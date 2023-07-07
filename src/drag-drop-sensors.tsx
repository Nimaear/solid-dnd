import { ParentComponent } from "solid-js";

import { createPointerSensor } from "./create-pointer-sensor";

type DragDropSensorsProps = {
  activationDelay?: number;
  activationDistance?: number;
}

const DragDropSensors: ParentComponent<DragDropSensorsProps> = (props) => {
  createPointerSensor('pointer-sensor', props.activationDelay, props.activationDistance);
  return <>{props.children}</>;
};

export { DragDropSensors };
