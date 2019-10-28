let dropDownAlert;

function setDropDownAlert(ref) {
  dropDownAlert = ref;
}

function alert(msgType, msgTitle, msg, msgDuration) {
  dropDownAlert.alertWithType(msgType, msgTitle, msg, msgDuration);
}

export default {
  dropDownAlert,
  alert,
  setDropDownAlert,
}