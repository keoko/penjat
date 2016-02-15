(ns penjat.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.util.response :refer [file-response resource-response content-type]]
            [environ.core :refer [env]]))


(defroutes routes
  (GET "/" [] (-> (resource-response "index.html" {:root "public"})
                  (content-type "text/html")))
  (resources "/")
  (not-found "Not Found"))

(def app (wrap-defaults #'routes site-defaults))
