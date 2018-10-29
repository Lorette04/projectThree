import React from "react";


export const WishLinks = props => (
<div>
<button {...props} href ="target.com" className="btn btn-outline-primary">Target {props.children}
</button>
<button {...props} className="btn btn-outline-secondary">Walmart {props.children}
</button>
<button {...props} className="btn btn-outline-success">Amazon {props.children}
</button>
<button {...props} className="btn btn-outline-danger">GameStop {props.children}
</button>
<button {...props} className="btn btn-outline-warning">BestBuy {props.children}
</button>
<button {...props} className="btn btn-outline-info">Ebay {props.children}
</button>
<button {...props} className="btn btn-outline-dark">Donate {props.children}
</button>
</div>
);


