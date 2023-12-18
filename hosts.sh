#!/bin/bash
echo "# Virtual Hosts" | sudo tee -a /etc/hosts
echo "127.0.0.1 x.xyz.com" | sudo tee -a /etc/hosts
echo "127.0.0.1 y.xyz.com" | sudo tee -a /etc/hosts