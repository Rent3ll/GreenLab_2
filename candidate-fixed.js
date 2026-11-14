/* Сборка поставщика. Сначала чёрный ящик, затем инспекция и исправление.
   Это не правильные требования: сопоставляйте с ТРЕБОВАНИЯ.txt.
   После редактирования сохраните файл и обновите START.html. */
(function(root){
const candidate={
  // Исправлено: строгое неравенство, чтобы при 35 сохранялось состояние (R05)
  pumpStart: humidity => humidity < 35,
  
  // Исправлено: авария удерживается, если она была, и нет сброса (независимо от возраста) (R03)
  hold: (previous, input) => previous.fault && !input.reset,
  
  // Исправлено: вентиляция имеет приоритет при распределении бюджета (R09)
  order: () => ['vent', 'pump']
};
if(typeof module!=='undefined')module.exports=candidate;else root.CandidatePolicy=candidate;
})(typeof window!=='undefined'?window:globalThis);
