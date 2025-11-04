(function(){
  const root = document.getElementById('ns-map');
  if(!root) return;
  const btn  = root.querySelector('#ns-toggle-all');
  const all  = () => Array.from(root.querySelectorAll('details'));
  function setAll(open){
    all().forEach(d => d.open = open);
    if(btn){
      btn.textContent = open ? 'Hide all' : 'Show all';
      btn.setAttribute('aria-expanded', String(open));
    }
  }
  setAll(false);
  if(btn){
    btn.addEventListener('click', ()=> {
      const anyClosed = all().some(d => !d.open);
      setAll(anyClosed);
    });
  }
  if (location.hash){
    const t = root.querySelector(location.hash);
    if (t){ t.querySelectorAll('details').forEach(d=>d.open=true); }
  }
})();
