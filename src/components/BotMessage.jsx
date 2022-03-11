import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      console.log("msg====>", msg);
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      
      {message?.map((item, index) => {
        return (
          <div>
            {item.text ? (
              <div className="bot-message">
                {isLoading ? "..." : item.text.text[0]}
              </div>
            ) : (
              <></>
            )}

            {
              item?.image ? (
               <div style={{width:'20%'}}> 
                 <img
                    style={{ width: 30, height: 30 }}
                    src={item?.image.imageUri}
                  />
               </div>
                  
               
              ) : (
                <></>
              )
              //  :<></>
            }
          </div>
        );
      })}
    </div>
  );
}
